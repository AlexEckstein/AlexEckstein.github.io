!function(i){skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)"}),i(function(){var e=i(window),t=i("body"),a=i("#sidebar");if(skel.vars.IEVersion<12&&t.addClass("is-ie"),skel.canUse("transition")&&t.addClass("is-loading"),e.on("load",function(){window.setTimeout(function(){t.removeClass("is-loading")},100)}),i("form").placeholder(),i("form").on("click",".submit",function(e){e.stopPropagation(),e.preventDefault(),i(this).parents("form").submit()}),skel.on("+medium -medium",function(){i.prioritize(".important\\28 medium\\29",skel.breakpoint("medium").active)}),a.length>0){var s=a.find("a");s.addClass("scrolly").on("click",function(){var e=i(this);"#"==e.attr("href").charAt(0)&&(s.removeClass("active"),e.addClass("active").addClass("active-locked"))}).each(function(){var e=i(this),t=e.attr("href"),a=i(t);a.length<1||a.scrollex({mode:"middle",top:"-20vh",bottom:"-20vh",initialize:function(){skel.canUse("transition")&&a.addClass("inactive")},enter:function(){a.removeClass("inactive"),0==s.filter(".active-locked").length?(s.removeClass("active"),e.addClass("active")):e.hasClass("active-locked")&&e.removeClass("active-locked")}})})}i(".scrolly").scrolly({speed:1e3,offset:function(){return skel.breakpoint("large").active&&!skel.breakpoint("small").active&&a.length>0?a.height():0}}),i(".spotlights > section").scrollex({mode:"middle",top:"-10vh",bottom:"-10vh",initialize:function(){skel.canUse("transition")&&i(this).addClass("inactive")},enter:function(){i(this).removeClass("inactive")}}).each(function(){var e,t=i(this).find(".image"),a=t.find("img");t.css("background-image","url("+a.attr("src")+")"),(e=a.data("position"))&&t.css("background-position",e),a.hide()}),skel.canUse("transition")&&i(".features").scrollex({mode:"middle",top:"-20vh",bottom:"-20vh",initialize:function(){i(this).addClass("inactive")},enter:function(){i(this).removeClass("inactive")}})})}(jQuery);
