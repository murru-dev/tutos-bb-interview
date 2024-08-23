const progress = ref<number>(0);
const percentage = ref<number>(0);

export const useProgress = () => {
  const getProgress = () => progress.value;
  const setProgress = (v: number) => (progress.value = v);

  return {
    getProgress,
    setProgress,
  };
};
