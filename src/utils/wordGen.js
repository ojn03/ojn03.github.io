//  Purpose: Generates random words and adjectives for profile
// TODO - Add more words and adjectives
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
    'creative',
    'adaptable',
    'adventurous',
    'genuine',
    'artistic',
]
export const words2 = [
    'analytical',
    'ambitious',
    'curious',
    'diligent',
    'proactive',
    'resourceful',
]
export const words3 = [
    'passionate',
    'dedicated',
    'dependable',
    'attentive',
    'cooperative',
    'unique',
]


export const nouns = [
    'leader',
    'problem-solver',
    'thinker',
    'teammate',
    'engineer',
    'developer',
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