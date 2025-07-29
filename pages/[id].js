import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';

export default function SigningPage() {
  const router = useRouter();
  const { id } = router.query;
  const [text, setText] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (!id) return;
    const checkProfile = async () => {
      const ref = doc(db, 'yearbook', id);
      const snap = await getDoc(ref);
      if (snap.exists()) setValid(true);
    };
    checkProfile();
  }, [id]);

  const submit = async () => {
    const ref = collection(db, `yearbook/${id}/messages`);
    await addDoc(ref, { text });
    setText('');
  };

  if (!valid) return <p className="text-center mt-10 text-red-600">Invalid Profile ID</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Leave a Message</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full max-w-md h-32 p-2 border rounded resize-none"
        placeholder="Write your message here..."
      ></textarea>
      <button
        onClick={submit}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Send ✍️
      </button>
    </div>
  );
}