

module.exports = {
    sendMessage: async(message,content,deleteBotInterval,deleteUserInterval) => {
        try {
            await message.channel.send(content).then(msg =>{
                if (!deleteBotInterval) {
                   return;
                }
                else if (deleteBotInterval || deleteBotInterval > 0 || typeof deleteBotInterval != String){
                    setTimeout(() =>{
                        msg.delete()
                    },deleteBotInterval)
                }
                else{
                    return;
                }
   
                if (!deleteUserInterval){
                   return;
                }
                else if (deleteUserInterval || deleteUserInterval > 0 || typeof deleteUserInterval != String){
                    setTimeout(() =>{
                        message.delete()
                    },deleteUserInterval)
                }
                else if (deleteUserInterval == true){
       
                    message.delete()
                }
                else{
                   return;
                }
                
             
               })
                }
        catch (e){
             console.error(e)
        }
    },
    replyMessage : async(message,content,deleteBotInterval,deleteUserInterval) => {
        try {
           await message.reply(content).then(msg =>{
             if (!deleteBotInterval) {
                return;
             }
             else if (deleteBotInterval || deleteBotInterval > 0 || typeof deleteBotInterval != String){
                 setTimeout(() =>{
                     msg.delete()
                 },deleteBotInterval)
             }
             else{
                 return;
             }

             if (!deleteUserInterval){
                return;
             }
             else if (deleteUserInterval || deleteUserInterval > 0 || typeof deleteUserInterval != String){
                 setTimeout(() =>{
                     message.delete()
                 },deleteUserInterval)
             }
             else if (deleteUserInterval == true){
    
                 message.delete()
             }
             else{
                return;
             }
             
          
            })
             }
             catch (e){
                  console.error(e)
             }
    }
}
