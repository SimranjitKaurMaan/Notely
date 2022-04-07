export const NotelyTheme = {
    header : {
        mr: 2, 
        display: { xs: 'none', md: 'flex' }
    },
   searchBar: {
      containerStyle: {
         p: '2px 4px', 
         display: 'flex',
         alignItems: 'center', 
         width: 400 
      },
      iconStyle:{
        p: '10px'
      },
      inputStyle:{
        ml: 1,
        flex: 1
      }
   }, 
   card: {
    containerStyle: {
        maxWidth: 400, 
        mt: 4 
    },   
    headerStyle: {
        textAlign: 'start'
    },
    contentStyle: {
        textAlign: 'start'
    },
    actionStyle: {
        marginLeft: 'auto'
    }
   },
   navBar: {
       containerStyle:{
            width: '100%', 
            minWidth: 300, 
            bgcolor: 'background.paper'
       }
   },
   notes:{
       headerIconStyle:{
        marginLeft: 'auto'
       }
   }
}