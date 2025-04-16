
type Amount = string | number;

let value: Amount;
value = 'One';
value = 1;


type Status = 'enable' | 'disable';

function handleStatus(status: Status): void {
  if (status === 'enable') {
    console.log('System on');
  } else {
    console.log('System off');
  }
}

 handleStatus('enable');   









