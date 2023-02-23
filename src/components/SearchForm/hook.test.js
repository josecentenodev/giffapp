import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-test-renderer";
import useForm from "./hook";

const setup = (params) => renderHook(() => useForm(params))

test('should change keyword', ()=>{
    const {result} = setup()
    act(()=>{
        result.current.updateKeyword('batman')
    })
    expect(result.current.keyword).toBe('batman')
})

test('should use initial values', ()=>{
    const {result} = setup({initialKeyword: 'matrix'})
    expect(result.current.keyword).toBe('matrix')
})

test('should update times when updated twice', ()=>{
    const {result} = setup()
    act(()=>{
        result.current.updateKeyword('b')
        result.current.updateKeyword('ba')
    })
    expect(result.current.times).toBe(2)
    expect(result.current.keyword).toBe('ba')
})


