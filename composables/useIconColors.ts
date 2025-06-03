import { computed } from "vue";

export function useIconColors(index: number) {
  const iconBgColor = computed(() => {
    const colors = ["bg-lilac", "bg-mustard", "bg-algae", "bg-amber"];
    return colors[index % colors.length] || "bg-coral";
  });

  const iconTextColor = computed(() => {
    const lightBgIndexes = [1, 2];
    return lightBgIndexes.includes(index % 4) ? "text-wood" : "text-white";
  });

  return {
    iconBgColor,
    iconTextColor,
  };
}
