import { useState } from 'react'
import styled from 'styled-components'

const ENERGY_TYPES = ['Colorless', 'Darkness', 'Fighting', 'Fire', 'Grass', 'Lightning', 'Metal', 'Psychic', 'Water']
const RARITY_TYPES = ['Common', 'Uncommon', 'Rare', 'Rare Holo']
const SEARCH_OPTIONS = ['Type', 'Rarity', 'Sort by Number']

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`

const DropdownButton = styled.button`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font: inherit;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.darkSecondary};
    color: ${({ theme }) => theme.primary};
  }
`

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;
  width: 100%;
`

const DropdownItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.lightSecondary};
  }
`

export function Dropdown({ handleSearch }) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('Select Sorting Option')

    const toggleDropdown = () => {
        if (selectedOption !== 'Select Sorting Option') {
            setSelectedOption('Select Sorting Option')
        }
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setSelectedOption(option)
        if (RARITY_TYPES.includes(option)) {
            handleSearch('rarity', option)
        } else if (ENERGY_TYPES.includes(option)) {
            handleSearch('type', option)
        } else if (option === 'Sort by Number') {
            handleSearch('number')
        }
    }

    return (
        <DropdownWrapper>
            <DropdownButton onClick={toggleDropdown}>{selectedOption}</DropdownButton>
            {isOpen && (
                <DropdownMenu>
                    {selectedOption === 'Select Sorting Option' && (
                        SEARCH_OPTIONS.map((option) => (
                            <DropdownItem key={option} onClick={() => handleOptionClick(option)}>{option}</DropdownItem>
                        ))
                    )}
                    {selectedOption === 'Rarity' && (
                        RARITY_TYPES.map((rarity) => (
                            <DropdownItem key={rarity} onClick={() => handleOptionClick(rarity)}>{rarity}</DropdownItem>
                        ))
                    )}
                    {selectedOption === 'Type' && (
                        ENERGY_TYPES.map((type) => (
                            <DropdownItem key={type} onClick={() => handleOptionClick(type)}>{type}</DropdownItem>
                        ))
                    )}
                </DropdownMenu>
            )}
        </DropdownWrapper>
    )
}