var eventList = [
	  { id:"wedding681"   ,
      name:"Stars Marriage", 
	    type:"Wedding",
	    author:"Vidy", 
	    host:"Vidy", 
      startDateAndTime:1464770169837, 
      endDateAndTime:1465970169837, 
      GuestList:[{
                firstName: "David", 
                lastName:"Boyd"
              }, {
                firstName: "Nicholas",
                lastName:"Brody"
              }, {
                firstName: "Carrie",
                lastName: "mathison"
              }], 
      location:"Gedung Perjuangan 25th",
      message:"Bacon ipsum dolor amet leberkas spare ribs alcatra ham swine pork chop. Salami kielbasa andouille beef ribs tail chicken doner landjaeger, pig pastrami. Bacon ham prosciutto short loin beef ribs landjaeger turkey porchetta. Andouille cupim leberkas filet mignon pastrami sirloin cow ribeye landjaeger."
    },
    { id:"Meeting101" ,
      name:"MarketingMeeting", 
      type:"Conference-Talk",
      author:"Carrie", 
      host:"Carrie", 
      startDate:"", 
      startTime:"", 
      endDate:"", 
      endTime:"", 
      GuestList:[{
                firstName: "", 
                lastName:""
              }], 
      location:"",
      message: "Venison prosciutto shoulder chuck ham hock doner bacon drumstick pork belly cow meatball ribeye beef chicken. Jowl filet mignon landjaeger, brisket short ribs salami boudin corned beef kevin beef. Landjaeger short ribs chicken bacon pork belly, pancetta ribeye. Salami boudin jerky, leberkas pork belly chicken jowl bresaola. Filet mignon alcatra tail bacon short ribs, beef doner turkey meatloaf tenderloin tri-tip turducken. Beef ribs filet mignon doner cupim, tongue salami frankfurter rump landjaeger corned beef pastrami ground round. Pork loin venison pastrami pork belly salami meatball hamburger, alcatra strip steak corned beef ham t-bone."
    },
    { id:"Party90"  ,
      name:"BoomHouse", 
      type:"Party",
      author:"David", 
      host:"David", 
      startDate:"", 
      startTime:"", 
      endDate:"", 
      endTime:"", 
      GuestList:[{
                firstName: "", 
                lastName:""
              }], 
      location:"",
    }
];

const Event = {
  eventList: eventList,
  getAll(){
    return this.eventList
  },
  replace(events){
    this.eventList = events
  },
  push(event){
    this.eventList.push(event)
  }
}

module.exports = Event;