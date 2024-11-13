export default function taskBlock(trueOrFalse) {
	let task = false;
	let task2 = true;
  
	if (trueOrFalse) {
	  let task = true;  // Nouvelle variable limitée au bloc `if`
	  let task2 = false; // Nouvelle variable limitée au bloc `if`
	}
  
	return [task, task2];
