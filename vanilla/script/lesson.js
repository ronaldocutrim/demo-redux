export const LESSON_TYPES = {
  COMPLETAR_AULA: 'LESSON/COMPLETAR_AULA',
  COMPLETAR_CURSO: 'LESSON/COMPLETAR_CURSO',
  RESETAR_CURSO: 'LESSON/RESETAR_CURSO',
}

export const LESSON_ACTIONS = {
  [LESSON_TYPES.COMPLETAR_AULA](state, lessonId){
    return {
      ...state,
    }
  },
  [LESSON_TYPES.COMPLETAR_CURSO](state){
    return {
      ...state,
      completed: true,
    }
  },
  [LESSON_TYPES.RESETAR_CURSO](state){
    return {
      ...state,
    }
  },
}

const initialLessonState = {
  data: [
    {
      id: 1,
      name: 'Introdução',
      completed: false
    }
  ]
}


export const lessonReducer = createReducer(initialLessonState, LESSON_ACTIONS)
