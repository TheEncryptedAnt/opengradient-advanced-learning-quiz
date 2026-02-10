<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>OpenGradient Quiz</title>
<script src="questions.js"></script>
<style>
body{
  margin:0;
  font-family: Inter, Arial, sans-serif;
  background:#020617;
  color:#e5e7eb;
  display:flex;
  justify-content:center;
}
.container{
  max-width:620px;
  padding:30px;
}
h2{margin-bottom:10px;}
.option{
  border:1px solid #334155;
  padding:12px;
  border-radius:10px;
  margin-top:10px;
  cursor:pointer;
}
.option.correct{background:#052e1b;border-color:#22c55e;}
.option.wrong{background:#3f1d1d;border-color:#ef4444;}
.explain{
  font-size:13px;
  margin-top:8px;
  color:#c7d2fe;
}
button{
  margin-top:18px;
  padding:12px;
  border:none;
  border-radius:10px;
  background:#2563eb;
  color:#fff;
  font-weight:600;
}
a{color:#60a5fa;text-decoration:none;font-weight:600;}
</style>
</head>

<body>
<div class="container" id="app"></div>

<script>
let i=0,score=0,locked=false;
const app=document.getElementById("app");

function render(){
  if(i>=questions.length){
    app.innerHTML=`
      <h2>Final Score</h2>
      <p>You scored <b>${score}/${questions.length}</b></p>
      <p>
        Learn more at 
        <a href="https://docs.opengradient.ai" target="_blank">
          docs.opengradient.ai
        </a>
      </p>
      <p>
        Built by 
        <a href="https://x.com/TheEncryptedAnt" target="_blank">
          @TheEncryptedAnt
        </a>
      </p>`;
    return;
  }
  const q=questions[i];
  app.innerHTML=`<h2>Q${i+1}. ${q.q}</h2>`;
  q.options.forEach((o,idx)=>{
    const d=document.createElement("div");
    d.className="option";
    d.innerText=o;
    d.onclick=()=>select(d,idx,q);
    app.appendChild(d);
  });
}

function select(el,idx,q){
  if(locked)return;
  locked=true;
  const ops=document.querySelectorAll(".option");
  ops.forEach(o=>o.onclick=null);

  if(idx===q.answer){
    el.classList.add("correct");
    score++;
  }else{
    el.classList.add("wrong");
    ops[q.answer].classList.add("correct");
  }

  const ex=document.createElement("div");
  ex.className="explain";
  ex.innerText=q.explain;
  app.appendChild(ex);

  const btn=document.createElement("button");
  btn.innerText="Next";
  btn.onclick=()=>{i++;locked=false;render();}
  app.appendChild(btn);
}

render();
</script>
</body>
</html>
