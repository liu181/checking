
(function () {
	var arr = ['a','b','c','d','e','f','g','h','i','j','k',
			   'l','m','n','o','p','q','r','s','t','u','v',
			   'w','x','y','z','0','1','2','3','4','5','6',
			   '7','8','9',]
    // 可以 随意添加各种颜色
	var colors = ['blue', 'orange','deeppink','yellow','gray','chocolate', 'cadetblue'],
		// 用来存放 4个字符串的
		value = [],
		// 通过id获取dom元素
		checking = getId('checking'),
		checkVal = getId('checkVal'),
		btn = getId('btn'),
		cvs = document.createElement('canvas'),
		ctx = cvs.getContext("2d"),
		valGet, valCreate,
		h = 35,
		// 背景的索引
		bgCount;

	cvs.height = h;
	cvs.width = 120;

	checking.addEventListener('click', function () {
		
		// 先生成4个字符放到数组里 
		for(var i = 0; i < 4; i++){
			value.push(arr[Math.round(Math.random() * (arr.length - 1))])
		}
		// 绘制之前要先清空画布
		cvs.width = cvs.width;
		// 在隐藏的画布上绘制
		bgCount = Math.round(Math.random() * (colors.length - 1));
		ctx.fillStyle = colors[bgCount];
		ctx.fillRect(0, 0, cvs.width, cvs.height);
		for(var i = 0; i < value.length; i++){
			// 记录文字的索引 用于与背景的比较
			
			var textCount = Math.round(Math.random() * (colors.length - 1));
			while(textCount === bgCount){
				textCount = Math.round(Math.random() * (colors.length - 1));
			}
			ctx.beginPath();
			ctx.fillStyle = colors[textCount];
			ctx.font = "45px Courier New";
			ctx.fillText(value[i], 30 * i, 28);
		}

		// 将画布的内容 转成base64
		checking.innerHTML = '';
		var img = document.createElement('img');
        img.src = cvs.toDataURL("image/png");
        // 将数组里的内容 转成字符串存储到变量里用于判断
        valCreate = value.join("")
		// 清空数组
		value = [];
		// 展示到页面上
        checking.appendChild(img);
	})
	btn.addEventListener('click', function () {
		// 获取input输入框的值
		valGet = checkVal.value;
		if(valGet === valCreate){
			console.log('验证码输入正确');
		} else {
			console.log('验证码输入错误');
		}
	})
	function getId (id) {
		return document.getElementById(id);
	}
})()
