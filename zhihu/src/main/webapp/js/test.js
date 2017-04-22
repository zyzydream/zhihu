$(function(){
        $("[rel=drevil]").popover({
            trigger:'manual',
            placement : 'bottom', //placement of the popover. also can use top, bottom, left or right
            title : '', //this is the top title bar of the popover. add some basic css
            html: 'true', //needed to show html of course
            content : '<table style="width: 300px;"><tr><td colspan="2">用户A发送消息</td></tr><tr><td>content..</td><td>2017-04-22</td></tr><tr><td colspan="2"><hr style="margin: 5px;"></td></tr><tr><td colspan="2">用户A发送消息</td></tr><tr><td>content..</td><td>2017-04-22</td></tr><tr><td colspan="2"><hr style="margin: 5px;"></td> </tr></table>',
            animation: false
        }).on("mouseenter", function () {
                    var _this = this;
                    $(this).popover("show");
                    console.log($("[rel=drevil]"));
                    $(this).siblings(".popover").on("mouseleave", function () {
                        $(_this).popover('hide');
                    });
                }).on("mouseleave", function () {
                    var _this = this;
                    setTimeout(function () {
                        if (!$(".popover:hover").length) {
                            $(_this).popover("hide")
                        }
                    }, 100);
                });
	});

$(function () { $("[data-toggle='popover']").popover({ trigger:'hover'}); });  


function closeD(){
	document.getElementById("modal-wrapper").style.display="none";
}