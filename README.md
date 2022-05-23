# todo-app  

***A Web Application for securely managing a To Do List.*** 

# PR phase  1
[PR](https://github.com/Oubaida996/todo-app/pull/4)  


# netlify  
[netlify](https://deploy-preview-5--cheery-sprite-e211ca.netlify.app/)  






# Phase 1 Requirements 
In Phase 1, we’re going to perform some refactoring of the To Do application as built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.  
- Style the application using the Blueprint Component API{target:_blank}
- Properly modularize the application into separate components  
- Implement the Context API to make some basic application settings available to components
 
        - Describe how global state is consumed by the components  

        To make global state we need to use context api hook which help us to make    
        state as global and all childre can scope the state just we need to create    
        context and wrape all cildren that will consumed the state.

       - Describe the operation of the hook: useForm()  
       useForm is a hook that allows to manage forms. It has some action   
       methods that create, edit and clone the form. The hook return value comes   
       to according to the called action and it can run different logic depending on the action.  

assitant by :[useForm](https://refine.dev/docs/core/hooks/useForm/)
        
