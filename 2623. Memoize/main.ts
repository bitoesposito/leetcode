
// Definiamo il tipo della funzione generica da memoizzare
type Fn = (...params: number[]) => number
// Fn è una funzione che prende un numero variabile di parametri numerici e ritorna un numero

// La funzione memoize prende una funzione fn e ritorna la sua versione memoizzata
// In TypeScript dobbiamo estendere il tipo Fn con una proprietà opzionale getCallCount perché aggiungeremo un metodo alla funzione stessa
function memoize(fn: Fn): Fn & { getCallCount?: () => number } {

  // Contatore delle volte che la funzione originale viene chiamata
  let callCount = 0

  // Cache per ricordare i risultati già calcolati
  // La chiave è una stringa (che rappresenta gli argomenti)
  // Il valore è il risultato della funzione originale
  const callsCache = new Map<string, number>()

  // Creiamo la funzione memoizzata
  const memoized = function(...args: number[]): number {

    // Trasformiamo gli argomenti in una stringa per usarla come chiave univoca Es: fn(2,3) => key = "[2,3]"
    const key = JSON.stringify(args)

    // Controlliamo se il risultato è già in cache
    if (callsCache.has(key)) {
      // Se esiste, ritorniamo direttamente il valore senza chiamare fn
      // L'operatore ! serve perché Map.get può ritornare undefined, ma qui sappiamo che esiste
      return callsCache.get(key)!
    }

    // Se il risultato non è in cache, calcoliamo la funzione originale
    const result = fn(...args)

    // Incrementiamo il contatore: abbiamo chiamato fn realmente
    callCount++

    // Salviamo il risultato nella cache
    callsCache.set(key, result)

    // Ritorniamo il risultato
    return result
  }

  // Aggiungiamo un metodo alla funzione memoizzata per leggere il numero di chiamate reali
  memoized.getCallCount = function() {
    return callCount
  }

  // Ritorniamo la funzione memoizzata con il metodo aggiunto
  return memoized
}
