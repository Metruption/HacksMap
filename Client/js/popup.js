function popup(url) {
    newwindow=window.open(url,'name','height=200,width=150');
    if (window.focus) {newwindow.focus()}
    return false;
};

function notification() {
    function generate(layout) {
        var n = noty({
            text        : 'Hello', 
            type        : 'alert',
            dismissQueue: true,
            layout      : layout,
            theme       : 'defaultTheme',
            buttons     : [
                {addClass: 'btn btn-primary', text: 'Ok', onClick: function ($noty) {
                    $noty.close();
                    
                }
                },
                
                ]
                });
                    console.log('html: ' + n.options.id);
                }
                function generateAll() {
                    generate('center');
                }
                $(document).ready(function () {
                    generateAll();
                });
    }

    ;