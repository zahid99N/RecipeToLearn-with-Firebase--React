import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useState, useEffect } from 'react'
import { projectFirestore } from '../../firebase/config'
// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const { mode } = useTheme()

  const [data, setData] = useState(null)
  const [isPending, setIspending] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {
    setIspending(true)
    projectFirestore.collection('recipes').doc(id).get().then((doc) => {
      
      if (doc.exists) {
        setIspending(false)
        setData(doc.data())
      } else {
        setIspending(false)
        setError('Could not fetch the recipe')
      }
    }).catch(err => {
      setError(err.message)
      setIspending(false)
    })

  }, [id])


  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <>
          <h2 className="page-title">{data.title}</h2>
          <p>Takes {data.cookingTime} to cook.</p>
          <ul>
            {data.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{data.method}</p>
        </>
      )}
    </div>
  )
}