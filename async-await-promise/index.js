(async function(){

    function sleep(time){
        console.log('Sleeping...');
        return new Promise (function(resolve, reject){
            setTimeout(function() {
                resolve('Done Sleeping');
                
            }, time);

        });
    }

   //const Promise = sleep(3000);
   //Promise
    //.then(function(message) {
       // console.log(message);

        //});

        const message = await sleep(3000);
        console.log('message');
        
        console.log('END OF SYNC EXECUTION');
 
    });