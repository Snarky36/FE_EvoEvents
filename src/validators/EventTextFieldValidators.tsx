export const validateEventName= (value: string)=>{
  if(value.length===0) return 'Name is required';

  if (value.length > 2 && value.length<=100) return '';

  return 'Name should have between 2 and 100 characters';
}

export const validateEventCapacity = (value: number) => {
  if(value===0) return 'Capacity is required';

  if(value<0) return 'Capacity should be positive'

  if(value>100000) return 'Maximum number of participants is 100.000'
  
  return '';
};
