export const Typography = () => {
  return (
    <div className="space-y-6 font-geist">
      {Headings()}
      {Buttons()}
      {Text()}
    </div>
  );
};

export const Headings = () => (
  <div className="space-y-6">
    <h1 className="underline text-h3">Headings</h1>

    <h1 className="text-h1">
      H1 - The quick brown fox jumps over the lazy dog
    </h1>
    <h2 className="text-h2">
      H2 - The quick brown fox jumps over the lazy dog
    </h2>
    <h3 className="text-h3">
      H3 - The quick brown fox jumps over the lazy dog
    </h3>
    <h4 className="text-h4">
      H4 - The quick brown fox jumps over the lazy dog
    </h4>
    <h5 className="text-h5">
      H5 - The quick brown fox jumps over the lazy dog
    </h5>
  </div>
)

export const Buttons = () => (
  <div className="space-y-4">
    <h1 className="underline text-h3">Buttons</h1>
    <h1 className='text-button1'>
      Button 1 - The quick brown fox jumps over the lazy dog
    </h1>
    <p className="text-button2">
      Button 2 - The quick brown fox jumps over the lazy dog
    </p>
  </div>
)

export const Text = () => (
  <div className="space-y-4">
    <h1 className="underline text-h3">Text</h1>
    <p className="text-text1">
      Text 1 - The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
    </p>
    <p className="text-text2">
      Text 2 - The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
    </p>
    <p className="text-caption">
      Caption - The quick brown fox jumps over the lazy dog
    </p>
  </div>
)
