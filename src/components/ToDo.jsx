import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
faCircleCheck, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

const ToDo = ({ toDo, markDone,deleteTask }) => {
return(
    <>
    {toDo && toDo
    .sort((a, b) => a.id > b.id ? 1 : -1)
    .map( (task, index) => {
        return(
        <React.Fragment key={task.id}>
            <div className="col taskBg bg-red-300 background-color: rgb(252 165 165) max-w-2xl max-width: 42rem rounded-full border-radius: 9999px mb-6 margin-bottom: 1.5rem  pt-2.5 padding-top: 0.625rem pr-36 padding-right: 9rem pb-2.5 padding-bottom: 0.625rem pl-3.5 padding-left: 0.875rem text-left text-align: left text-lg	font-size: 1.125rem relative position: relative ml-80 margin-left: 20rem">
                <div className={ task.status ? 'done':''}>
                    <span className="text-black	color: rgb(0 0 0) border-2 border-width: 2px border-black border-color: rgb(0 0 0) rounded border-radius: 0.25rem w-7 width: 1.75rem h-7 height: 1.75rem flex display: flex text-center text-align: center text-sm font-size: 0.875rem mr-2	margin-right: 0.5rem items-center align-items: center justify-center justify-content: center">{index + 1}</span>
                    <span className="taskText text-black color: rgb(0 0 0) flex display: flex">{task.title}</span>
                </div>
                <div className="absolute position: absolute top-2 top: 0.5rem translate-y-2	transform: translateY(0.5rem) right-4 right: 1rem inline-block display: inline-block w-auto	width: auto mb-2.5 margin-bottom: 0.625rem">
                    <span className="inline-block display: inline-block mr-2.5 margin-right: 0.625rem ml-2.5 margin-left: 0.625rem cursor-pointer cursor: pointer text-yellow-700 color: rgb(161 98 7) hover:text-black color: rgb(0 0 0)" title="Completed / Not Completed"
                    onClick={ (e) => markDone(task.id) }>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    </span>

                    <span className="inline-block display: inline-block mr-2.5 margin-right: 0.625rem ml-2.5 margin-left: 0.625rem cursor-pointer cursor: pointer text-yellow-700 color: rgb(161 98 7) hover:text-black color: rgb(0 0 0)" title="Delete"
                    onClick={() => deleteTask(task.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                </div>
            </div>
        </React.Fragment>
        )
    })
    }  
    </>
)
}
export default ToDo;
