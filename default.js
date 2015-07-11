var currIndex = 0;
var listParent;
var listLength;
var list = document.getElementsByTagName("li");
var indexList = document.getElementsByTagName("a");
var autoRollingTimer;

$(window).load(function(){
    goPlay();
    document.addEventListener("keyup", keyEventHandler);
    //var indexParent = document.getElementById("indexParent");
});

function keyEventHandler(evt) {
	var eventReference = (typeof evt !== "undefined")? evt : event;
	var keyCode = eventReference.keyCode;
	console.log("keyCode: "+ keyCode);

	if (keyCode === 39) {
		// right
		goRight();
	} else if (keyCode === 37) {
		// left
		goLeft();
	}
}

function goLeft()
{
   console.log("<<left  ");
   listLength = list.length;
   if (listLength > 0)
   {
   // change current index style
   indexList[currIndex].setAttribute("class", "index-item");

   if (currIndex === 0)
   {
   	currIndex = currIndex + listLength;
   }

   	currIndex = (currIndex-1)%listLength;
   
   	listParent = list[0].parentNode;
   	listParent.insertBefore(list[listLength-1], list[0]);
   	// change left index style
   	indexList[currIndex].setAttribute("class", "index-item index-item-on");
   }
}

function goRight()
{
   console.log("  right>>");
   listLength = list.length;
   if (listLength > 0)
   {
   // change current index style
   indexList[currIndex].setAttribute("class", "index-item");

   	currIndex = (currIndex+1)%listLength;
   
   // go to right image
   	listParent = list[0].parentNode;
   	listParent.appendChild(list[0]);
   	// change right index style
   	indexList[currIndex].setAttribute("class", "index-item index-item-on");
   }
}

function goPlay()
{
	console.log("  play ▶ ");
	autoRollingTimer = setInterval(goRight, 1000);
}

function goPause()
{
	console.log("  pause ▣  ");
	clearInterval(autoRollingTimer);
}
var eventTarget;
function goIndex(evt)
{
	var eventReference = (typeof evt !== "undefined") ? evt : event;
	eventTarget = (typeof eventReference.target !== "undefined")? eventReference.target : eventReference.srcElement;
	var selectedIndex = parseInt(eventTarget.text,10);

	//console.log("  index: " + selectedIndex-1);
	console.log(" selected text value: " + eventTarget.text);

	var i;
	if (currIndex < selectedIndex-1)
	{
		var count = selectedIndex-1 - currIndex;
		for(i=0 ;i<count; i++)
		{
			goRight();
		}
	} else if (currIndex > selectedIndex-1)
	{
		var count = currIndex - (selectedIndex-1);
		for(i=0;i<count; i++)
		{
			goLeft();
		}
	}
}
   //listParent = document.getElementById("slideForm");

   //var currentItem = list.item(currIndex).childNodes.item(1);
   //var nextItem = list.item(getNextIndex()).childNodes.item(1);

   //var currSrc = currentItem.getAttribute("src");
   //var nextSrc = nextItem.getAttribute("src");

   // currentItem에 nextSrc를 적용
   //currentItem.setAttribute("src", nextSrc);

   //console.log("src: " + currentItem.getAttribute("src"));


// 자식을 포함하고 있는 부모를 찾아서 변수수에 담습니다.
//var container = window.document.getElementById("container");

// container 안에 있는 자식을 childNodes 로 모두 찾아서 변수 child 에 담습니다.
//var child = container.childNodes;

// 자식중에서 첫번째 자식을 찾아 변수에 담는 예제.
//var firstChild = page.firstChild;

// 자식중에서 마지막 자식을 찾아 변수에 담는 예제.
//var lastChild = page.lastChild;