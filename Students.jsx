import React from 'react'
import { students } from '../data'
import { Card, Text, Flex } from '@radix-ui/themes';
import { useState } from 'react';

export const Students = () => {
  const[selectedId, setSelectedId] = useState(null)
  console.log(students);
  console.log(selectedId);

  const selectedStudent = students.find(obj => obj.id == selectedId)
  console.log(selectedStudent);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Flex direction="column" gap="3" maxWidth="350px">
        {students.map((obj) => (
          <Card variant="surface" key={obj.id}
            style={{
              cursor: obj.status == 'active' ? 'pointer': 'not-allowed',
              opacity: obj.status == 'inactive' ? 0.7 : 1,
              outline: obj.id == selectedId ? '2px solid var(--accent-8)' : undefined
            }}
            onClick={()=>obj.status == 'active' && setSelectedId(obj.id)}
          >
            <Text as="div" size="2" weight="bold">
              {obj.name}
            </Text>
            <Text as="div" color="gray" size="2">
              Status: {obj.status}
            </Text>
          </Card>
        ))}
        {selectedStudent && 
          <div style={{outline: '2px solid gray', borderRadius: '5px'}}>
            <Text align="center">Jegyek:</Text>
            <Flex gap="2" justify= "center">
              {selectedStudent.grades.map((grade, index)=>
                <Text key={index}>
                  {grade}
                </Text>
              )}  
            </Flex>
          </div>
        }
      </Flex>
    </div>
  );
}
