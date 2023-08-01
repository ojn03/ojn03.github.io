//  Purpose: Generates random words and adjectives for profile
export const Os = [
    // '(O-liv-ee-ay)',
    'Orange',
    'Observant',
    // 'Oblivious',
    'Obliging',
    // 'Obnoxious',
    'Obscene',
    'Overpowered',
    'Omnipotent',
    // 'Omniscient',
    'Omnivorous',
    'Ominous',
    'Obtuse',
    'Odd',
]

export const Js = [
    'John',
    'Juice',
    'Juicy',
    'Jubilant',
    'Jellyfish',
    'Juvenile',
    'Jovial',
]

export const Ns = [
    'Ninja',
    'Nerd',
    // 'Narcissist',
    'Necromancer',
    'Not-Simpson',
]


export const words1 = [
    'Innovative',
    'adaptable',
    'creative',

]
export const words2 = [
    'curious',
    'determined',
    'analytical',
    'ambitious',
    'driven',

]
export const words3 = [
    'adventurous',
    'dedicated',
    'dependable',
    'attentive',
]

export const words4 = [
    'passionate',
    'genuine',
    'artistic',
]
export const words5 = [
    'proactive',
    'diligent',
    'resourceful',
]
export const words6 = [
    'unique',
    'cooperative',
    'versatile',
]
export const words7 = [
    'persistent',
    'enthusiastic',
    'optimistic',
    'practical',
]

export const words8 = [
    'authentic',
    'productive',
    'reliable',
]


export const nouns = [
    'leader',
    'problem-solver',
    'thinker',
    'teammate',
    'engineer',
    'developer',
    'visionary',
]



export const gen = (list, word) => {
    const idx = Math.floor(Math.random() * list.length)
    if (word === list[idx]) {
        return gen(list, word)
    }
    return list[idx]
}




// import FileSaver from 'file-saver';
// import { surpriseMePrompts } from '../constant';

// export function getRandomPrompt(prompt) {
//   const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
//   const randomPrompt = surpriseMePrompts[randomIndex];

//   if (randomPrompt === prompt) return getRandomPrompt(prompt);

//   return randomPrompt;
// }

// export async function downloadImage(_id, photo) {
//   FileSaver.saveAs(photo, `download-${_id}.jpg`);
// }