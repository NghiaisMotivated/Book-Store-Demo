// Biến để lưu API
var dataStore = 'http://localhost:3000/chainsawMans';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (chainsawMans) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = chainsawMans.map(function (chainsawMan) {
            return `
            <div class="new product-box text-center">
            <a href ="${chainsawMan.link}">
            <img src="${chainsawMan.img}" alt="" class="product-img">
           <h2 class="product-title">${chainsawMan.name}</h2>
           <span class="product-price">${chainsawMan.price}</span> <br>
           </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-0').innerHTML = html
        console.log(html)
    })

// Biến để lưu API
var dataStore = 'http://localhost:3000/godofWars';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (godofWars) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = godofWars.map(function (godofWar) {
            return `
            <div class="new product-box text-center">
            <a href ="${godofWar.link}">
            <img src="${godofWar.img}" alt="" class="product-img">
              
                <h2 class="product-title">${godofWar.name}</h2>
                <span class="product-price">${godofWar.price}</span> <br>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-1').innerHTML = html
        console.log(html)
    })

// Biến để lưu API
var dataStore = 'http://localhost:3000/arnols';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (arnols) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = arnols.map(function (arnol) {
            return `
            <div class="product-box text-center new">
            <a href ="${arnol.link}">
            <img src="${arnol.img}" alt="" class="product-img">
                    
                    <h2 class="product-title">${arnol.name}</h2>
                    <span class="product-price">${arnol.price}</span> <br>
                    
                    </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-2').innerHTML = html
        console.log(html)
    })

// Biến để lưu API
var dataStore = 'http://localhost:3000/finances';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (finances) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = finances.map(function (finance) {
            return `
            <div class="new product-box text-center">
            <a href ="${finance.link}">

            <img src="${finance.img}" alt="" class="product-img">
       
                    <h2 class="product-title">${finance.name}</h2>
                    <span class="product-price">${finance.price}</span> <br>
                    </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-3').innerHTML = html
        console.log(html)
    })

// Biến để lưu API
var dataStore = 'http://localhost:3000/jojos';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (jojos) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = jojos.map(function (jojo) {
            return `
            <div class="new product-box text-center">
            <a href ="${jojo.link}">

            <img src="${jojo.img}" alt="" class="product-img">
                    
                        <h2 class="product-title">${jojo.name}</h2>
                        <span class="product-price">${jojo.price}</span> <br>
                        </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-4').innerHTML = html
        console.log(html)
    })

// Biến để lưu API
var dataStore = 'http://localhost:3000/ops';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (ops) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ops.map(function (op) {
            return `
            <div class="new product-box text-center">
            <a href ="">

            <img src="${op.img}" alt="" class="product-img">
                   
                    <h2 class="product-title">${op.name}</h2>
                    <span class="product-price">${op.price}</span> <br
                    </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-5').innerHTML = html
        console.log(html)
    })


var dataStore = 'http://localhost:3000/yns';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (yns) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = yns.map(function (yn) {
            return `
            <div class="new product-box text-center">
            <a href ="">

            <img src="${yn.img}" alt="" class="product-img">
               
                <h2 class="product-title">${yn.name}</h2>
                <span class="product-price">${yn.price}</span> <br>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-6').innerHTML = html
        console.log(html)
    })




var dataStore = 'http://localhost:3000/shortstories';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (shortstories) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = shortstories.map(function (shortstory) {
            return `
            <div class=" new product-box text-center">
            <a href ="">

            <img src="${shortstory.img}" alt="" class="product-img">
              
                <h2 class="product-title">${shortstory.name}</h2>
                <span class="product-price">${shortstory.price}</span> <br>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-7').innerHTML = html
        console.log(html)
    })



var dataStore = 'http://localhost:3000/sqls';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (sqls) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = sqls.map(function (sql) {
            return `
            <div class="new product-box text-center">
            <a href ="">

            <img src="${sql.img}" alt="" class="product-img">
            
                <h2 class="product-title">${sql.name}</h2>
                <span class="product-price">${sql.price}</span> <br>
                </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-8').innerHTML = html
        console.log(html)
    })



var dataStore = 'http://localhost:3000/jss';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (jss) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = jss.map(function (js) {
            return `
            <div class="new product-box text-center">
            <a href ="">

            <img src="${js.img}" alt="" class="product-img">
           
            <h2 class="product-title">${js.name}</h2>
            <span class="product-price">${js.price}</span> <br>
            </a>
            </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-9').innerHTML = html
        console.log(html)
    })



var dataStore = 'http://localhost:3000/ras';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (ras) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ras.map(function (ra) {
            return `
                <div class="new product-box text-center">
                <a href ="">
                <img src="${ra.img}" alt="" class="product-img">
                <h2 class="product-title">${ra.name}</h2>
                <span class="product-price">${ra.price}</span> <br>
                </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-10').innerHTML = html
        console.log(html)
    })


var dataStore = 'http://localhost:3000/vns';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (vns) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = vns.map(function (vn) {
            return `
                <div class="new product-box text-center">
                <a href ="">
                <img src="${vn.img}" alt="" class="product-img">
                <h2 class="product-title">${vn.name}</h2>
                <span class="product-price">${vn.price}</span> <br>
                </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-11').innerHTML = html
        console.log(html)
    })

var dataStore = 'http://localhost:3000/awh';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (awh) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = awh.map(function (aw) {
            return `
                <div class="new product-box text-center">
                <a href ="">
                <img src="${aw.img}" alt="" class="product-img">
                <h2 class="product-title">${aw.name}</h2>
                <span class="product-price">${aw.price}</span> <br>
                </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-12').innerHTML = html
        console.log(html)
    })
var dataStore = 'http://localhost:3000/er';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (er) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = er.map(function (e) {
            return `
                <div class="new product-box text-center">
                <a href ="">
                <img src="${e.img}" alt="" class="product-img">
                <h2 class="product-title">${e.name}</h2>
                <span class="product-price">${e.price}</span> <br>
                </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-13').innerHTML = html
        console.log(html)
    })
var dataStore = 'http://localhost:3000/zo';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (zo) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = zo.map(function (z) {
            return `
                <div class="new product-box text-center">
                <a href ="">
                <img src="${z.img}" alt="" class="product-img">
                <h2 class="product-title">${z.name}</h2>
                <span class="product-price">${z.price}</span> <br>
                </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-14').innerHTML = html
        console.log(html)
    })

var dataStore = 'http://localhost:3000/non';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (non) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = non.map(function (no) {
            return `
                <div class="new product-box text-center">
                <a href ="">
                <img src="${no.img}" alt="" class="product-img">
                <h2 class="product-title">${no.name}</h2>
                <span class="product-price">${no.price}</span> <br>
                </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-15').innerHTML = html
        console.log(html)
    })
var dataStore = 'http://localhost:3000/wh';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (wh) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = wh.map(function (w) {
            return `
                <div class="new product-box text-center">
                <a href ="">
                <img src="${w.img}" alt="" class="product-img">
                <h2 class="product-title">${w.name}</h2>
                <span class="product-price">${w.price}</span> <br>
                </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-16').innerHTML = html
        console.log(html)
    })
var dataStore = 'http://localhost:3000/bs';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (bs) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = bs.map(function (b) {
            return `
                <div class="new product-box text-center">
                <a href ="">
                <img src="${b.img}" alt="" class="product-img">
                <h2 class="product-title">${b.name}</h2>
                <span class="product-price">${b.price}</span> <br>
                </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-17').innerHTML = html
        console.log(html)
    })



var dataStore = 'http://localhost:3000/ls';
fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (ls) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = ls.map(function (l) {
            return `
                <div class="new product-box text-center">
                <a href ="">
                <img src="${l.img}" alt="" class="product-img">
                <h2 class="product-title">${l.name}</h2>
                <span class="product-price">${l.price}</span> <br>
                </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-18').innerHTML = html
        console.log(html)
    })
var dataStore = 'http://localhost:3000/lifes';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (lifes) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = lifes.map(function (life) {
            return `
                <div class="new product-box text-center">
                <a href ="">
                <img src="${life.img}" alt="" class="product-img">
                <h2 class="product-title">${life.name}</h2>
                <span class="product-price">${life.price}</span> <br>
                </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-19').innerHTML = html
        console.log(html)
    })

var dataStore = 'http://localhost:3000/dbz';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (dbz) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = dbz.map(function (db) {
            return `
                    <div class="new product-box text-center">
                    <a href ="">
                    <img src="${db.img}" alt="" class="product-img">
                    <h2 class="product-title">${db.name}</h2>
                    <span class="product-price">${db.price}</span> <br>
                    </a>
                    </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-20').innerHTML = html
        console.log(html)
    })
    var dataStore = 'http://localhost:3000/hxh';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (hxh) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = hxh.map(function (hx) {
            return `
                    <div class="new product-box text-center">
                    <a href ="">
                    <img src="${hx.img}" alt="" class="product-img">
                    <h2 class="product-title">${hx.name}</h2>
                    <span class="product-price">${hx.price}</span> <br>
                    </a>
                    </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-21').innerHTML = html
        console.log(html)
    })
    var dataStore = 'http://localhost:3000/nar711';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (nar711) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = nar711.map(function (nar71) {
            return `
                    <div class="new product-box text-center">
                    <a href ="">
                    <img src="${nar71.img}" alt="" class="product-img">
                    <h2 class="product-title">${nar71.name}</h2>
                    <span class="product-price">${nar71.price}</span> <br>
                    </a>
                    </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-22').innerHTML = html
        console.log(html)
    })
    var dataStore = 'http://localhost:3000/nar722';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (nar722) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = nar722.map(function (nar72) {
            return `
                    <div class="new product-box text-center">
                    <a href ="">
                    <img src="${nar72.img}" alt="" class="product-img">
                    <h2 class="product-title">${nar72.name}</h2>
                    <span class="product-price">${nar72.price}</span> <br>
                    </a>
                    </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-23').innerHTML = html
        console.log(html)
    })

var dataStore = 'http://localhost:3000/csm144';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (csm144) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = csm144.map(function (csm14) {
            return `
                <div class="new product-box text-center">
                <a href ="">
                <img src="${csm14.img}" alt="" class="product-img">
                <h2 class="product-title">${csm14.name}</h2>
                <span class="product-price">${csm14.price}</span> <br>
                </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('list-24').innerHTML = html
        console.log(html)
    })





    // NEW RELEASE

    var dataStore = 'http://localhost:3000/newR1';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (newR1) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = newR1.map(function (newR) {
            return `
                <div class="new product-box text-center">
                <a href ="">
                <img src="${newR.img}" alt="" class="product-img">
                <h2 class="product-title">${newR.name}</h2>
                <span class="product-price">${newR.price}</span> <br>
                </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('listr-0').innerHTML = html
        console.log(html)
    })


    
    var dataStore = 'http://localhost:3000/newR2';

fetch(dataStore)
    .then(function (response) {
        return response.json();
    })
    .then(function (newR2) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = newR2.map(function (newR) {
            return `
                <div class="new product-box text-center">
                <a href ="">
                <img src="${newR.img}" alt="" class="product-img">
                <h2 class="product-title">${newR.name}</h2>
                <span class="product-price">${newR.price}</span> <br>
                </a>
                </div>`
        })
        var html = htmls.join('');
        document.getElementById('listr-1').innerHTML = html
        console.log(html)
    })


    var dataStore = 'http://localhost:3000/newR3';

    fetch(dataStore)
        .then(function (response) {
            return response.json();
        })
        .then(function (newR3) {
            // Sử dụng map để lặp qua phần tử 
    
            var htmls = newR3.map(function (newR) {
                return `
                    <div class="new product-box text-center">
                    <a href ="">
                    <img src="${newR.img}" alt="" class="product-img">
                    <h2 class="product-title">${newR.name}</h2>
                    <span class="product-price">${newR.price}</span> <br>
                    </a>
                    </div>`
            })
            var html = htmls.join('');
            document.getElementById('listr-2').innerHTML = html
            console.log(html)
        })


        var dataStore = 'http://localhost:3000/newR4';

        fetch(dataStore)
            .then(function (response) {
                return response.json();
            })
            .then(function (newR4) {
                // Sử dụng map để lặp qua phần tử 
        
                var htmls = newR4.map(function (newR) {
                    return `
                        <div class="new product-box text-center">
                        <a href ="">
                        <img src="${newR.img}" alt="" class="product-img">
                        <h2 class="product-title">${newR.name}</h2>
                        <span class="product-price">${newR.price}</span> <br>
                        </a>
                        </div>`
                })
                var html = htmls.join('');
                document.getElementById('listr-3').innerHTML = html
                console.log(html)
            })


            
        var dataStore = 'http://localhost:3000/newR5';

        fetch(dataStore)
            .then(function (response) {
                return response.json();
            })
            .then(function (newR5) {
                // Sử dụng map để lặp qua phần tử 
        
                var htmls = newR5.map(function (newR) {
                    return `
                        <div class="new product-box text-center">
                        <a href ="">
                        <img src="${newR.img}" alt="" class="product-img">
                        <h2 class="product-title">${newR.name}</h2>
                        <span class="product-price">${newR.price}</span> <br>
                        </a>
                        </div>`
                })
                var html = htmls.join('');
                document.getElementById('listr-4').innerHTML = html
                console.log(html)
            })



            
var dataLifeStyle = "http://localhost:3000/lifeStyles";
fetch(dataLifeStyle)
    .then(function(response) {
        return response.json();
    })
    .then(function(lifeStyles) {
        // Sử dụng map để lặp qua phần tử 
        var html = lifeStyles.map(function(lifeStyle) {
            return `

         <div class = "new id-${lifeStyle.id}">
             <img src="${lifeStyle.pic}" alt="">
                    <a href="">
                    <p class = "title" >${lifeStyle.title}</p>
                    <p class ="name">${lifeStyle.name}</p>
                    <br>
                   <p class ="day"> ${lifeStyle.day}</p>
                    </a>
         </div>

            `
        })
        var lifeStyle = html.join('');
        document.getElementById('news-list').innerHTML = lifeStyle;
        console.log(lifeStyle)
    });