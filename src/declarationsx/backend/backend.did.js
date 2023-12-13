export const idlFactory = ({ IDL }) => {
  const Backend = IDL.Service({
    'changeMessage' : IDL.Func([IDL.Text], [], []),
    'getMessage1' : IDL.Func([], [IDL.Text], ['query']),
    'whoami' : IDL.Func([], [IDL.Principal], ['query']),
  });
  return Backend;
};
export const init = ({ IDL }) => { return []; };
