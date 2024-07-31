function verifyMaxSizeFile(file: File): boolean {
  // 1 MB en bytes
  const maxSizeInBytes = 1024 * 1024;
  return file.size > maxSizeInBytes;
}

export default verifyMaxSizeFile;
