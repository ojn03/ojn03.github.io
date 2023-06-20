//  Purpose: Generates random words and adjectives for profile
// TODO - Add more words and adjectives
 const Os = [
    'Orange',
    'Observant',
    // 'Oblivious',
    'Obliging',
    // 'Obnoxious',
    'Obscene',
    'Overpowered',
]

 const Js = [
    'Juice',
    'Juicy',
    'Jubilant',
    'Jellyfish',
    'Juvenile',
    'Jovial',
]

 const Ns = [
    'Ninja',
    'Nerd',
    // 'Narcissist',
    'Necromancer',
    'Not-Simpson',
]

export const genOs = (O) => {
    const idx = Math.floor(Math.random() * Os.length)
    if (O === Os[idx]) {
        return genOs(O)
    }
    return Os[idx]
}
export const genJs = (J) => {
    const idx = Math.floor(Math.random() * Js.length)
    if (J === Js[idx]) {
        return genJs(J)
    }
    return Js[idx]
}
export const genNs = (N) => {
    const idx = Math.floor(Math.random() * Ns.length)
    if (N === Ns[idx]) {
        return genNs(N)
    }
    return Ns[idx]
}

export const NameGen = () => {
    return `${genOs()} ${genJs()} ${genNs()}`
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