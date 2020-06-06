import React, { useState, useEffect } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api/index'

const CountryPicker = ({handleCountryChange}) => {
  

  const [fetchedCountries, setFetchedCountries] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }
    fetchAPI()
  }, [setFetchedCountries])
  return (
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)} variant="filled">
          <option value="">Global</option>
          {fetchedCountries.map((country,index) =><option value={country} key={index}>{country}</option>)}
        </NativeSelect>
      </FormControl>
  )
}

export default CountryPicker
