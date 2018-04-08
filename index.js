
beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

function add(a, b){
  return a + b
} 

function subtract(a, b){
  return a - b
} 

function multiply(a, b){
  return a * b
} 

function divide(a, b){
  return a / b
} 

function inc(a){
  return a++
} 

function dec(a){
  return a--
} 

function makeInt(n){
 return Parseint(a,10)
 
  }

function preserveDecimal(n){
  if (){
    
  }
  
  else (){
    
  }
  
  
} 




describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})
