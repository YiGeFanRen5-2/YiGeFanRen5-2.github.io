var posts=["undefined/83a7.html","undefined/36791.html","undefined/55082.html","undefined/31659.html","undefined/61401.html","undefined/44993.html","undefined/6209.html","undefined/2169.html","undefined/35642.html","undefined/23230.html","undefined/13003.html","undefined/13002.html","undefined/40195.html","undefined/7122.html","undefined/18194.html","undefined/13115.html","undefined/4c71.html","undefined/f91f.html","undefined/b4a0.html","undefined/51156.html","undefined/38564.html","undefined/6881.html","undefined/42451.html","undefined/18589.html","undefined/59355.html","undefined/15557.html","undefined/40ea.html","undefined/2988.html","undefined/d3af.html","undefined/bf1.html","undefined/81f0.html","undefined/2d8c.html","undefined/2d8c.html","undefined/24515.html","undefined/7bf7.html","undefined/bfff.html","undefined/217a.html","undefined/fc9c.html","undefined/c8e3.html","undefined/a604.html","undefined/cf47.html","undefined/abd8.html","undefined/8169.html","undefined/526a.html","undefined/daa1.html","undefined/500a.html","undefined/225f.html","undefined/7e51.html","undefined/3a0.html","undefined/dec3.html","undefined/14b7.html","undefined/1d1.html","undefined/fe6c.html","undefined/3d57.html","undefined/45803.html","undefined/d889.html","undefined/42d2.html","undefined/4ffb.html","undefined/b129.html","undefined/da9e.html","undefined/6b46.html","undefined/f8ae.html","undefined/a173.html","undefined/fea.html","undefined/14fc.html","undefined/7ffe.html","undefined/84c4.html","undefined/dba1.html","undefined/bae3.html","undefined/16f3.html","undefined/130c.html","undefined/fc27.html","undefined/5c27.html","undefined/b5e3.html","undefined/460c.html","undefined/4a1b.html","undefined/e82f.html","undefined/9b45.html","undefined/511d.html","undefined/198.html","undefined/9bca.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };