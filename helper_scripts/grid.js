
var methods = {
    makeGrid: function(n) {
        let output = "";

        output += '<table>'
        output += '<tbody>'

        // nested for loops and/or
        // while loop goes here
        for(let i=0;i<n;i++) {
            output += '<tr>'
            for(let j=0;j<n;j++) {
                var color = ((1<<24)*Math.random()|0).toString(16);
                output += "<td style='background-color: #"+ color +";'>"
                output += ""+color+"<br/><span style='color: #ffffff;'>"+color+"</span>";
                output += "</td>";        
            }
            output += "</tr>";
        }

        output += "</tbody>";
        output += "</table>";

        return output;
    },
    make404s: function(){
        let output = "";
        let n = 20 + parseInt(Math.random()*31);
        for(let i=0;i<n;i++) {
            let pick = parseInt(Math.random()*3);
            if(pick == 0){
                output += "<div class='still'>404</div>"
            }
            else if(pick == 1){
                output += "<div class='rotate'>404</div>"
            }
            else{
                output += "<div class='shrink'>404</div>"
            }
            
        }
        return output;
    }

}


exports.gridTools = methods;