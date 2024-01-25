// https://qiita.com/mashuel/items/69b00b33961aa914f7fc

//script法
(function(F){
	function a(e){
		F[0]&&F.shift()();
		h.removeChild(this);
		e.target=null
	}
	var u="data:,",h=document.getElementsByTagName("head")[0];
	this.wait0Script=function(f){
		F[F.length]=f;
		f=document.createElement("script");
		f.onload=a;f.src=u;h.appendChild(f)
	}
})([]);

//FileReader法
(function(F){
	function a(){F[0]&&F.shift()()}
	var b=new Blob([new Uint8Array(0)]);
	this.wait0FileReader1=function(f){
		F[F.length]=f;f=new FileReader;
		f.onload=a;f.readAsArrayBuffer(b)}
})([]);
//FileReader法2
(function(F){
	var b=new Blob([new Uint8Array(0)]),r=new FileReader;
	r.onload=a=>{
		F[0]&&F.shift()();delete r.result
	}
	this.wait0FileReader2=function(f){
		F[F.length]=f;r.readAsArrayBuffer(b)
	}
})([]);

//Image法
(function(F){
	function a(){F[0]&&F.shift()()}
	var s="data:image/gif;base64,R0lGODdhAQABAAAAAAA";
	this.wait0Image1=function(f){
		F[F.length]=f;f=new Image;
		f.onload=a;f.src=s
	}
})([]);
//Image法2
(function(F){
	var i=new Image,s="data:image/gif;base64,R0lGODdhAQABAAAAAAA";
	i.onload=function(){
		F[0]&&F.shift()();delete i.src
	};
	this.wait0Image2=function(f){F[F.length]=f;i.src=s}
})([]);

//postMessage法
(function(a){
	var F=[],hit="\0";
	a.wait0PostMessage=function(f){
		F[F.length]=f;a.postMessage(hit,"*")
	};
	a.onmessage=function(e){
		if(e.source===a&&e.data===hit)
			e.stopPropagation(),F[0]&&F.shift()()
	}
})(this);
