"""Render the portfolio's original headset illustration with Pillow (optional artwork tooling)."""
import math
from pathlib import Path
from PIL import Image, ImageDraw
from math import cos, sin, pi

W, H = 1000, 900
faces = []

def project(p):
    x,y,z = p
    x,z = .84*x+.543*z, -.543*x+.84*z
    y,z = .97*y-.24*z, .24*y+.97*z
    return (500+190*x, 425-190*y, z)

def mesh(fn, rows, cols, ink):
    for i in range(rows):
        for j in range(cols):
            pts=[project(fn(a/rows,b/cols)) for a,b in [(i,j),(i+1,j),(i+1,j+1),(i,j+1)]]
            shade = (1+cos(j/cols*2*pi-.9))*.5
            faces.append((sum(p[2] for p in pts)/4, [(round(x),round(y)) for x,y,_ in pts],ink,shade))

def band(u,v):
    t=(-.18+u*1.36)*pi
    radius=1.53+.09*cos(v*2*pi)
    return radius*cos(t),.12+radius*sin(t),.27*sin(v*2*pi)
mesh(band,72,18,.8)
for side in (-1,1):
    def cup(u,v):
        t=pi*u
        return side*(1.40+.38*cos(t)),-.42+.73*sin(t)*cos(v*2*pi),.57*sin(t)*sin(v*2*pi)
    mesh(cup,20,38,1)
    def pad(u,v):
        t=pi*u
        return side*(1.19+.19*cos(t)),-.43+.68*sin(t)*cos(v*2*pi),.53*sin(t)*sin(v*2*pi)
    mesh(pad,13,32,.65)
def boom(u,v):
    x=-1.54+.96*u**1.6
    y=-.73-.54*sin(u*pi/2)
    z=.30+1.18*u
    return x+.045*cos(v*2*pi), y+.05*sin(v*2*pi),z
mesh(boom,26,9,1)
def mic(u,v):
    t=u*pi
    return -.57+.24*cos(t),-1.27+.12*sin(t)*cos(v*2*pi),1.48+.14*sin(t)*sin(v*2*pi)
mesh(mic,14,20,1)
im=Image.new('RGBA',(W,H)); d=ImageDraw.Draw(im)
for z,pts,ink,shade in sorted(faces,key=lambda f:f[0]):
    light=max(.16,min(1,.48+.20*z+.25*shade))*ink
    d.polygon(pts,fill=(10,int(30+32*light),int(37+38*light),255))
    d.line(pts+[pts[0]],fill=(int(24+85*light),int(64+185*light),int(79+171*light),255),width=2)
out=Path(__file__).resolve().parents[1]/'public/headset.webp'
im.getbbox() and im.crop(im.getbbox()).save(out,quality=93,method=6)
