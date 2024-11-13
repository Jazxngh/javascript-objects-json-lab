(function(){ 
    /// start
    console.info("Hello JS"); 
    
    //This is adding content onto the dom structure
    const myNode = document.createElement("div");
    digitalClock.appendChild(myNode);
    myNode.innerHTML = "Welcome";
    
    const myDate = new Date();
    console.dir(myDate);
    
    // This will display every seconds going up via tick tock
    const updateTime = function(){
        console.info('tick tock');
        const myDate = new Date(); //Adding this will 
        myNode.innerHTML = myDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }); 
        //Line 22 Shows date myNode.innerHTML = myDate.toDateString();
    };
        setInterval(updateTime, 1000);
        updateTime();
        
        
        
        
        




            
// end
})();