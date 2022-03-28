"use strict"


const main = document.querySelector('.main');
const selection = document.querySelector('.selection');
const title = document.querySelector('.main__title');

const getData = () => {
    const dataBase = [
        {
            id: '01',
            theme: 'Тема01 тестовая',
            result: [
                [40, 'Есть задатки, нужно зазвиваться'],
                [80, 'Очень хорошо, но есть пробелы'],
                [100, 'Отличный результат'],
            ],
            list: [
                {
                    type: 'checkbox',
                    question: 'Вопрос 1',
                    answer: ['правильный1', 'правильный2','неправильный', 'неправильный'],
                    correct: 2,
                },
                {
                    type: 'radio',
                    question: 'Вопрос 2',
                    answer: ['правильный1', 'неправильный','неправильный', 'неправильный']
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос 3',
                    answer: ['правильный1', 'правильный2','неправильный', 'неправильный'],
                    correct: 2,
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос 4',
                    answer: ['правильный1', 'правильный2','неправильный', 'неправильный'],
                    correct: 2,
                },
                {
                    type: 'radio',
                    question: 'Вопрос 5',
                    answer: ['правильный1', 'неправильный','неправильный', 'неправильный']
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос 6',
                    answer: ['правильный', 'неправильный','неправильный', 'неправильный'],
                    correct: 1,
                },
                {
                    type: 'radio',
                    question: 'Вопрос 7',
                    answer: ['правильный1', 'неправильный','неправильный', 'неправильный']
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос 8',
                    answer: ['правильный1', 'правильный2','правильный3', 'неправильный'],
                    correct: 3,
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос 9',
                    answer: ['правильный1', 'правильный2','неправильный', 'неправильный'],
                    correct: 2,
                },
            ]
        },
        {
            id: '02',
            theme: 'Тема02 тоже тестовая',
            result: [
                [30, 'Есть задатки, нужно зазвиваться'],
                [60, 'Очень хорошо, но есть пробелы'],
                [100, 'Отличный результат'],
            ],
            list: [
                {
                    type: 'radio',
                    question: 'Вопрос',
                    answer: ['правильный1', 'неправильный','неправильный', 'неправильный'],
                },
                {
                    type: 'radio',
                    question: 'Вопрос',
                    answer: ['правильный1', 'неправильный','неправильный', 'неправильный']
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный1', 'правильный2','неправильный', 'неправильный'],
                    correct: 2,
                },
                {
                    type: 'radio',
                    question: 'Вопрос',
                    answer: ['правильный1', 'неправильный','неправильный', 'неправильный']
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный', 'неправильный','неправильный', 'неправильный'],
                    correct: 1,
                },
                {
                    type: 'radio',
                    question: 'Вопрос',
                    answer: ['правильный1', 'неправильный','неправильный', 'неправильный']
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный1', 'правильный2','правильный3', 'неправильный'],
                    correct: 3,
                },
                {
                    type: 'checkbox',
                    question: 'Вопрос',
                    answer: ['правильный1', 'правильный2','неправильный', 'неправильный'],
                    correct: 2,
                },
            ]
        }
    ];
    return dataBase;
};

const hideElem = (elem) => {
    let opacity = getComputedStyle(elem).getPropertyValue('opacity');

    const animation = () => {
        opacity -=  0.05;
        elem.style.opacity = opacity;

        if (opacity > 0) {
            requestAnimationFrame(animation);
        }else {
            elem.style.display = 'none';
        }
    };
    requestAnimationFrame(animation);
};

const renderTheme = (themes) => {
   const list = document.querySelector('.selection__list');
   list.textContent = '';

   const buttons = [];

   for (let i = 0; i < themes.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'selection__item';

    const button = document.createElement('button');
    button.className = 'selection__theme';
    button.dataset.id = themes[i].id;
    button.textContent = themes[i].theme;


    li.append(button);
    list.append(li);

    buttons.push(button);

   }
   return buttons;
};

const renderQuiz = (quiz) => {
    hideElem(title);
    hideElem(selection);

    const questionBox = document.createElement('div');
    questionBox.className = 'main__box main__box_question';

    main.append(questionBox);

    let questionCount = 0;
    const showQuestion = () => {
        const data = quiz.list[questionCount];
        questionCount += 1;
        
        questionBox.textContent = '';
        const form = document.createElement('form');
        form.className = 'main__form-question';
        form.dataset.count = `${questionCount}/${quiz.list.length}`;


        const fieldSet = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.className = 'main__subtitle';
        legend.textContent = data.question;

        fieldSet.append(legend);
        form.append(fieldSet);

        questionBox.append(form);
    }; 
    showQuestion();
};

const addClick = (buttons, data) => {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
           const quiz = data.find(item => item.id === btn.dataset.id);
           renderQuiz(quiz);
        });
    });
};

const initQuiz = () => {
    const data = getData();

    const buttons = renderTheme(data);

    addClick(buttons, data);
};

initQuiz();