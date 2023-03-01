let divs = document.querySelectorAll('div');

let btn = document.getElementById('btn');
let END = document.getElementById('end');

let audio = document.getElementById('audio');
let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');
let e = document.getElementById('e');
let f = document.getElementById('f');
let g = document.getElementById('g');
let h = document.getElementById('h');
let i = document.getElementById('i');
let ff = true;








btn.addEventListener('click',()=>{
  audio.play();
  start(200,()=>{
    a.classList.add('ACTIVE')
    })
    .then(()=>{
      return start(200,()=>{
        e.classList.add('ACTIVE')
      })
    })
    .then(()=>{
      return start(200,()=>{
        f.classList.add('ACTIVE')
      })
    })
    .then(()=>{
      return start(200,()=>{
        i.classList.add('ACTIVE')
      })
    })
    .then(()=>{
      return start(200,()=>{
        b.classList.add('ACTIVE')
      })
    })
    .then(()=>{
      return start(200,()=>{
        c.classList.add('ACTIVE')
      })
    })
    .then(()=>{
      return start(200,()=>{
        h.classList.add('ACTIVE')
      })
    })
    .then(()=>{
      return start(200,()=>{
        g.classList.add('ACTIVE')
      })
    })
    .then(()=>{
      return start(200,()=>{
        d.classList.add('ACTIVE')
      })
    })
   
    
  

})

let start = (time,go)=>{


  return  new Promise((resolve,reject) => {



  if(ff){
    setTimeout(()=>{
      resolve( go() )
  },time);
   
   }else{
   
      reject(console.log('sooooryyy'))
    
   }



 
 
  });


}





























END.addEventListener('click',()=>{
  audio.play();
  end(200,()=>{
    d.classList.remove('ACTIVE')
    })
    .then(()=>{
      return end(200,()=>{
        b.classList.remove('ACTIVE')
      })
    })
    .then(()=>{
      return end(200,()=>{
        i.classList.remove('ACTIVE')
      })
    })
    .then(()=>{
      return end(200,()=>{
        a.classList.remove('ACTIVE')
      })
    })
    .then(()=>{
      return end(200,()=>{
        e.classList.remove('ACTIVE')
      })
    })
    .then(()=>{
      return end(200,()=>{
        h.classList.remove('ACTIVE')
      })
    })
    .then(()=>{
      return end(200,()=>{
        g.classList.remove('ACTIVE')
      })
    })
    .then(()=>{
      return end(200,()=>{
        f.classList.remove('ACTIVE')
      })
    })
    .then(()=>{
      return end(200,()=>{
        c.classList.remove('ACTIVE')
      })
    })
    
    
  

})

let end = (time,go)=>{


  return  new Promise((resolve,reject) => {



  if(ff){
    setTimeout(()=>{
      resolve( go() )
  },time);
   
   }else{
   
      reject(console.log('sooooryyy'))
    
   }



 
 
  });


}
























/*
let start = (time,go)=>{


  return  new Promise((resolve,reject) => {



  if(ff){
    setTimeout(()=>{
      resolve( go() )
  },time);
   
   }else{
   
      reject(console.log('sooooryyy'))
    
   }



 
 
  });


}







start(400,()=>{
  a.classList.add('ACTIVE')
  })
  .then(()=>{
    return start(400,()=>{
      b.classList.add('ACTIVE')
    })
  })
  .then(()=>{
    return start(400,()=>{
      c.classList.add('ACTIVE')
    })
  })
  .then(()=>{
    return start(400,()=>{
      d.classList.add('ACTIVE')
    })
  })
  .then(()=>{
    return start(400,()=>{
      e.classList.add('ACTIVE')
    })
  })
  .then(()=>{
    return start(400,()=>{
      f.classList.add('ACTIVE')
    })
  })
  .then(()=>{
    return start(400,()=>{
      g.classList.add('ACTIVE')
    })
  })
  .then(()=>{
    return start(400,()=>{
      h.classList.add('ACTIVE')
    })
  })
  .then(()=>{
    return start(400,()=>{
      i.classList.add('ACTIVE')
    })
  })
  .then(()=>{
    return start(400,()=>{
      g.classList.add('ACTIVE')
    })
  })
  
*/


