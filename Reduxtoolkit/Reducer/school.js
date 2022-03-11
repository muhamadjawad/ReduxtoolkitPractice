import {createSlice} from '@reduxjs/toolkit';

export const schoolSlice = createSlice({
  name: 'school',
  initialState: {data: {name: 'ABC', since: '1999', teachers: ['a', 'b']}},
  reducers: {
    changeName: state => {
      console.log('Change ');
      state.data.name = 'Changed Name';
      state.data.since = '3000';
    },

    setName: (state, action) => {
      state.data.name = action.payload;
    },

    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeName, incrementByAmount, setName} = schoolSlice.actions;

export default schoolSlice.reducer;
