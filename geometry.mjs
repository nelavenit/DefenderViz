export const G={x:105,y:34};
export function blocked(a,d,r,alpha){const ux=105-a.x,uy=34-a.y,vx=d.x-a.x,vy=d.y-a.y,u=Math.hypot(ux,uy),v=Math.hypot(vx,vy);if(u<1e-10)return false;if(v>r+1e-9)return false;if(v<1e-10)return true;return ux*vx+uy*vy>=Math.cos(alpha*Math.PI/360)*u*v-1e-9;}
