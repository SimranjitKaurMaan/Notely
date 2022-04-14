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
         width: 700 
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
        minWidth: 700,
        maxWidth: 'fit-content', 
        mt: 4,
        boxShadow: 4
    }, 
    headerStyle: {
        textAlign: 'start'
    },
    headerActionStyle: {
      marginLeft: 'auto'
    },
    contentStyle: {
        textAlign: 'start'
    },
    textAreaStyle: {
        color: 'inherit'
    },
    actionStyle: {
        marginLeft: 'auto'
    }
   },
   editableCard: {
     titleContainerStyle: {
        display: 'flex', 
        justifyContent: 'start', 
        paddingLeft: '1rem'
     }
   },
   navBar: {
       containerStyle:{
            width: '100%', 
            minWidth: 200, 
            bgcolor: 'background.paper'
       }
   },
   notes:{
       headerIconStyle:{
        marginLeft: 'auto'
       }
   },
   colorPallete: {
    colors: {   
       redColor: '#F28A83',
       yellowColor: '#FFF275',
       blueColor: '#CAF0F9',
       greenColor: '#CBFE91',
       pinkColor: '#FDCEE9',
       purpleColor: '#D7AEFA',
       greyColor: '#E6EBED'
    },
    containerStyle: {
        position: 'absolute',
        top: 430,
        zIndex: 'tooltip',
        width: 'fit-content', 
        minWidth: 200,
        bgcolor: 'background.paper',
        p: 1, 
        borderRadius: 2, 
        boxShadow: 4 
    }
   },
   addTagDialog:{
    containerStyle: {
        position: 'absolute',
        top: 430,
        zIndex: 'tooltip',
        width: 'fit-content', 
        minWidth: 200,
        bgcolor: 'background.paper',
        p: 1, 
        borderRadius: 2, 
        boxShadow: 4 
    }
   }
}