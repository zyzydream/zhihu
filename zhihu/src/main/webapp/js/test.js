$(function(){
        $("[rel=drevil]").popover({
            trigger:'manual',
            placement : 'bottom', //placement of the popover. also can use top, bottom, left or right
            title : '', //this is the top title bar of the popover. add some basic css
            html: 'true', //needed to show html of course
            content : '<table style="width: 250px; text-align: center;"><tr><td style="border-right-style: solid;">文章</td><td style="border-right-style: solid;">回复</td><td>关注者</td><td rowspan="2" style="width: 70px;"><button type="button" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>关注</button></td></tr><tr><td style="border-right-style: solid;">1</td><td style="border-right-style: solid;">2</td><td>3</td><td></td></tr></table>',
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
