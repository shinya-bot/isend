
module.exports = {
  sendDirectMessage : async(message,content,uid) => {
    try{
      if (!content)
        return
      if (!uid){
        try{
        await message.author.send(content)
           
        }
        catch{
        
        }
      }
      
    }
    catch (e) {
      
    }
  }
}
