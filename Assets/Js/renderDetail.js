            
        var dataStore = 'http://localhost:3000/detailCSM';

        fetch(dataStore)
            .then(function (response) {
                return response.json();
            })
            .then(function (detailCSM) {
                // Sử dụng map để lặp qua phần tử 
        
                var htmls = detailCSM.map(function (CSM) {
                    return `
                        <div class="new product-box" style ="text-align: left">
                            <h2 style ="font-size: 30px">${CSM.name}</h2>
                                <div class = "more-detail d-flex" style ="margin-left: 30px; margin-top: 30px">
                                    <div>
                                    <p>Suppliers: <a href="">${CSM.publisher}</a></p>
                                    <p>Publisher: <a href="">${CSM.publisher}</a></p>
                                    <p>Series: <a href="">${CSM.series}</a></p>
                                    </div>
                                
                                    <div style= "text-align: left; margin-left: 300px">
                                    <p>Author: <a href="">${CSM.author}</a></p>
                                    <p>Cover: <a href="">${CSM.coverForm}</a></p>
                                    </div>
                                </div>

                            <h2  style ="margin-left: 30px; font-size:40px;">${CSM.price}</h2>
                            <div class = "more-detail d-flex" style ="margin-left: 30px; margin-top: 30px">
                            <div>
                            <p>Delivery Time:</p>
                            <p>Return Policy : </p>
                            <p>Amount : </p>
                            </div>
                        
                            <div style= "text-align: left; margin-left: 50px">
                            <p>Delivery to: <a href="">Change</a></p>
                            <p>Product return within 30 days: <a href="">Read more</a></p>
                            <input style="width: 50px;" type="number" value="1" class="cart-quantity">

                            </div>
                        </div>

                        <button style ="margin-left: 30px; margin-top: 20px" type="button" class="add-cart btn btn-primary">Add to cart</button>

                        </div>`
                })
                var html = htmls.join('');
                document.getElementById('right').innerHTML = html
                console.log(html)
            })





                        
        var dataStore = 'http://localhost:3000/detailGOW';

        fetch(dataStore)
            .then(function (response) {
                return response.json();
            })
            .then(function (detailGOW) {
                // Sử dụng map để lặp qua phần tử 
        
                var htmls = detailGOW.map(function (GOW) {
                    return `
                        <div class="new product-box" style ="text-align: left">
                            <h2 style ="font-size: 30px">${GOW.name}</h2>
                                <div class = "more-detail d-flex" style ="margin-left: 30px; margin-top: 30px">
                                    <div>
                                    <p>Suppliers: <a href="">${GOW.publisher}</a></p>
                                    <p>Publisher: <a href="">${GOW.publisher}</a></p>
                                    <p>Series: <a href="">${GOW.series}</a></p>
                                    </div>
                                
                                    <div style= "text-align: left; margin-left: 300px">
                                    <p>Author: <a href="">${GOW.author}</a></p>
                                    <p>Cover: <a href="">${GOW.coverForm}</a></p>
                                    </div>
                                </div>

                            <h2  style ="margin-left: 30px; font-size:40px;">${GOW.price}</h2>
                            <div class = "more-detail d-flex" style ="margin-left: 30px; margin-top: 30px">
                            <div>
                            <p>Delivery Time:</p>
                            <p>Return Policy : </p>
                            <p>Amount : </p>
                            </div>
                        
                            <div style= "text-align: left; margin-left: 50px">
                            <p>Delivery to: <a href="">Change</a></p>
                            <p>Product return within 30 days: <a href="">Read more</a></p>
                            <input style="width: 50px;" type="number" value="1" class="cart-quantity">

                            </div>
                        </div>

                        <button style ="margin-left: 30px; margin-top: 0px" type="button" class="add-cart btn btn-primary">Add to cart</button>

                        </div>`
                })
                var html = htmls.join('');
                document.getElementById('right1').innerHTML = html
                console.log(html)
            })



                        
            var dataStore = 'http://localhost:3000/detailArnol';

            fetch(dataStore)
                .then(function (response) {
                    return response.json();
                })
                .then(function (detailCSM) {
                    // Sử dụng map để lặp qua phần tử 
            
                    var htmls = detailCSM.map(function (CSM) {
                        return `
                            <div class="new product-box" style ="text-align: left">
                                <h2 style ="font-size: 30px">${CSM.name}</h2>
                                    <div class = "more-detail d-flex" style ="margin-left: 30px; margin-top: 30px">
                                        <div>
                                        <p>Suppliers: <a href="">${CSM.publisher}</a></p>
                                        <p>Publisher: <a href="">${CSM.publisher}</a></p>
                                        <p>Series: <a href="">${CSM.series}</a></p>
                                        </div>
                                    
                                        <div style= "text-align: left; margin-left: 300px">
                                        <p>Author: <a href="">${CSM.author}</a></p>
                                        <p>Cover: <a href="">${CSM.coverForm}</a></p>
                                        </div>
                                    </div>
    
                                <h2  style ="margin-left: 30px; font-size:40px;">${CSM.price}</h2>
                                <div class = "more-detail d-flex" style ="margin-left: 30px; margin-top: 30px">
                                <div>
                                <p>Delivery Time:</p>
                                <p>Return Policy : </p>
                                <p>Amount : </p>
                                </div>
                            
                                <div style= "text-align: left; margin-left: 50px">
                                <p>Delivery to: <a href="">Change</a></p>
                                <p>Product return within 30 days: <a href="">Read more</a></p>
                                <input style="width: 50px;" type="number" value="1" class="cart-quantity">
    
                                </div>
                            </div>
    
                            <button style ="margin-left: 30px; margin-top: 0px" type="button" class="add-cart btn btn-primary">Add to cart</button>
    
                            </div>`
                    })
                    var html = htmls.join('');
                    document.getElementById('right2').innerHTML = html
                    console.log(html)
                })




                var dataStore = 'http://localhost:3000/financee';

                fetch(dataStore)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (financee) {
                        // Sử dụng map để lặp qua phần tử 
                
                        var htmls = financee.map(function (finance) {
                            return `
                                <div class="new product-box" style ="text-align: left">
                                    <h2 style ="font-size: 30px">${finance.name}</h2>
                                        <div class = "more-detail d-flex" style ="margin-left: 30px; margin-top: 30px">
                                            <div>
                                            <p>Suppliers: <a href="">${finance.publisher}</a></p>
                                            <p>Publisher: <a href="">${finance.publisher}</a></p>
                                            <p>Series: <a href="">${finance.series}</a></p>
                                            </div>
                                        
                                            <div style= "text-align: left; margin-left: 300px">
                                            <p>Author: <a href="">${finance.author}</a></p>
                                            <p>Cover: <a href="">${finance.coverForm}</a></p>
                                            </div>
                                        </div>
        
                                    <h2  style ="margin-left: 30px; font-size:40px;">${finance.price}</h2>
                                    <div class = "more-detail d-flex" style ="margin-left: 30px; margin-top: 30px">
                                    <div>
                                    <p>Delivery Time:</p>
                                    <p>Return Policy : </p>
                                    <p>Amount : </p>
                                    </div>
                                
                                    <div style= "text-align: left; margin-left: 50px">
                                    <p>Delivery to: <a href="">Change</a></p>
                                    <p>Product return within 30 days: <a href="">Read more</a></p>
                                    <input style="width: 50px;" type="number" value="1" class="cart-quantity">
        
                                    </div>
                                </div>
        
                                <button style ="margin-left: 30px; margin-top: 0px" type="button" class="add-cart btn btn-primary">Add to cart</button>
        
                                </div>`
                        })
                        var html = htmls.join('');
                        document.getElementById('right4').innerHTML = html
                        console.log(html)
                    })
    
    


                    var dataStore = 'http://localhost:3000/jojoMega';

                    fetch(dataStore)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (jojoMega) {
                            // Sử dụng map để lặp qua phần tử 
                    
                            var htmls = jojoMega.map(function (jojo) {
                                return `
                                    <div class="new product-box" style ="text-align: left">
                                        <h2 style ="font-size: 30px">${jojo.name}</h2>
                                            <div class = "more-detail d-flex" style ="margin-left: 30px; margin-top: 30px">
                                                <div>
                                                <p>Suppliers: <a href="">${jojo.publisher}</a></p>
                                                <p>Publisher: <a href="">${jojo.publisher}</a></p>
                                                <p>Series: <a href="">${jojo.series}</a></p>
                                                </div>
                                            
                                                <div style= "text-align: left; margin-left: 300px">
                                                <p>Author: <a href="">${jojo.author}</a></p>
                                                <p>Cover: <a href="">${jojo.coverForm}</a></p>
                                                </div>
                                            </div>
            
                                        <h2  style ="margin-left: 30px; font-size:40px;">${jojo.price}</h2>
                                        <div class = "more-detail d-flex" style ="margin-left: 30px; margin-top: 30px">
                                        <div>
                                        <p>Delivery Time:</p>
                                        <p>Return Policy : </p>
                                        <p>Amount : </p>
                                        </div>
                                    
                                        <div style= "text-align: left; margin-left: 50px">
                                        <p>Delivery to: <a href="">Change</a></p>
                                        <p>Product return within 30 days: <a href="">Read more</a></p>
                                        <input style="width: 50px;" type="number" value="1" class="cart-quantity">
            
                                        </div>
                                    </div>
            
                                    <button style ="margin-left: 30px; margin-top: 0px" type="button" class="add-cart btn btn-primary">Add to cart</button>
            
                                    </div>`
                            })
                            var html = htmls.join('');
                            document.getElementById('right5').innerHTML = html
                            console.log(html)
                        })
        
        
    
                            
    