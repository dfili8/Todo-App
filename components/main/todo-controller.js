"use strict"; 
{
    angular.module('app')
        .controller('TodoController', function(){
            const $ctrl = this;
            $ctrl.title = 'TODO List';
            $ctrl.header = 'A place to store the things you have to do!';


            $ctrl.list = [ {task: 'clean house', completed: true},
                        {task: 'grocery shop', completed: false},
                        {task: 'walk dog', completed: false},
                        {task: 'hang out with Tim', completed: true},
                        {task: 'take a run', completed: false},
                        {task: 'homework', completed: true} ];
        });
}