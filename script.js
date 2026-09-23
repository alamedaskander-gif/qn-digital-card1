const disabledLinks=document.querySelectorAll(".disabled");
disabledLinks.forEach(el=>el.addEventListener("click",e=>{
 e.preventDefault(); alert("سيتم إضافة رابط هذه المنصة عند توفره.");
}));
const shareBtn=document.getElementById("shareBtn");
shareBtn?.addEventListener("click",async()=>{
 const data={title:"شركة QN لتجارة المواد الغذائية",text:"البطاقة الرقمية لشركة QN — مالك علي"};
 if(navigator.share){try{await navigator.share(data)}catch(e){}}
 else{
   try{await navigator.clipboard.writeText(location.href);alert("تم نسخ رابط البطاقة.");}
   catch(e){alert("يمكنك نسخ رابط الصفحة من شريط العنوان.");}
 }
});
