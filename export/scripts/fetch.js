let getData =async(url)=>{
         let res=await fetch(url);
        let data= await res.json();
    //console.log(data)
    data=data.sort((a,b)=>{
        return a.price-b.price
   })
    return data;
    };
  //  getData();

  let append=(data,cont)=>{
data.forEach(({image,title,price})=>{
    let img=document.createElement("img");
    img.src=image;
    let t=document.createElement("h3");
    t.innerText=title;
    let p=document.createElement("p");
    p.innerText=price;
    let div=document.createElement("div");
   div.append(img,t,p)

cont.append(div);

});
  };
  export{getData,append} //Named export