#!/usr/bin/env python3
"""
Docusaurus Project File Concatenator
Extracts and concatenates all relevant files from a Docusaurus project into a single output file.
Ignores binary files, images, node_modules, and other non-essential directories.
"""

import os
import sys
from pathlib import Path

# Directories to ignore
IGNORE_DIRS = {
    'node_modules',
    '.git',
    '.next',
    '.docusaurus',
    'build',
    'dist',
    '.cache',
    '__pycache__',
    '.vscode',
    '.idea',
    'coverage',
    '.pytest_cache',
    'static',  # Ignore entire static directory (contains images and assets)
    'public',
    '.github',  # Ignore GitHub workflows and configs
}

# File extensions to ignore (binary and image files)
IGNORE_EXTENSIONS = {
    # Images
    '.png', '.jpg', '.jpeg', '.gif', '.bmp', '.svg', '.ico', '.webp', '.tiff',
    # Videos
    '.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm',
    # Audio
    '.mp3', '.wav', '.ogg', '.flac',
    # Archives
    '.zip', '.tar', '.gz', '.rar', '.7z',
    # Binaries
    '.exe', '.dll', '.so', '.dylib', '.bin',
    # Fonts
    '.ttf', '.otf', '.woff', '.woff2', '.eot',
    # Other
    '.pdf', '.doc', '.docx', '.xls', '.xlsx',
    '.lock',  # package-lock.json, yarn.lock
    '.pyc',
}

# Specific files to ignore
IGNORE_FILES = {
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml',
    '.gitignore',
    '.gitattributes',
    '.npmignore',
    '.dockerignore',
    '.eslintcache',
    'concatenated_output.txt',  # Don't include the output file
    'extract.py',  # Don't include the extraction script itself
    'extract_files.py',
}

# File extensions to include (text-based files)
INCLUDE_EXTENSIONS = {
    # Documentation
    '.md', '.mdx',
    # Code
    '.js', '.jsx', '.ts', '.tsx',
    '.css', '.scss', '.sass', '.less',
    # Config (selective)
    '.json', '.yaml', '.yml',
}

def should_ignore_directory(dir_path: Path, root_path: Path) -> bool:
    """Check if directory should be ignored."""
    relative_path = dir_path.relative_to(root_path)
    parts = relative_path.parts
    
    # Check if any part of the path matches ignore patterns
    for part in parts:
        if part in IGNORE_DIRS:
            return True
        # Ignore hidden directories except specific ones
        if part.startswith('.') and part not in {'.github'}:
            return True
    
    return False

def should_include_file(file_path: Path, output_file_path: Path) -> bool:
    """Check if file should be included."""
    # Ignore if it's the output file itself
    if file_path.resolve() == output_file_path.resolve():
        return False
    
    # Ignore specific files
    if file_path.name in IGNORE_FILES:
        return False
    
    extension = file_path.suffix.lower()
    
    # Ignore files with ignored extensions
    if extension in IGNORE_EXTENSIONS:
        return False
    
    # Only include files with specific extensions
    if extension in INCLUDE_EXTENSIONS:
        return True
    
    return False

def is_text_file(file_path: Path) -> bool:
    """Check if file is a text file by attempting to read it."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            f.read(1024)  # Try to read first 1KB
        return True
    except (UnicodeDecodeError, PermissionError):
        return False

def extract_files(root_dir: str, output_file: str):
    """
    Extract all relevant files from the Docusaurus project and concatenate them.
    
    Args:
        root_dir: Root directory of the Docusaurus project
        output_file: Output file path for concatenated content
    """
    root_path = Path(root_dir).resolve()
    output_file_path = Path(output_file).resolve()
    
    if not root_path.exists():
        print(f"Error: Directory '{root_dir}' does not exist.")
        sys.exit(1)
    
    if not root_path.is_dir():
        print(f"Error: '{root_dir}' is not a directory.")
        sys.exit(1)
    
    print(f"Scanning directory: {root_path}")
    print(f"Output file: {output_file_path}")
    print("-" * 80)
    
    files_processed = 0
    files_skipped = 0
    
    with open(output_file, 'w', encoding='utf-8') as out_f:
        # Write header
        out_f.write(f"# Docusaurus Project File Concatenation\n")
        out_f.write(f"# Root Directory: {root_path}\n")
        out_f.write(f"# Generated: {output_file_path}\n")
        out_f.write("=" * 80 + "\n\n")
        
        # Walk through directory tree
        for current_dir, dirs, files in os.walk(root_path):
            current_path = Path(current_dir)
            
            # Filter out ignored directories
            if should_ignore_directory(current_path, root_path):
                dirs[:] = []  # Don't recurse into this directory
                continue
            
            # Remove ignored directories from dirs list to prevent os.walk from entering them
            dirs[:] = [d for d in dirs if not should_ignore_directory(current_path / d, root_path)]
            
            # Process files in current directory
            for file_name in sorted(files):
                file_path = current_path / file_name
                
                # Check if file should be included
                if not should_include_file(file_path, output_file_path):
                    files_skipped += 1
                    continue
                
                # Verify it's a text file
                if not is_text_file(file_path):
                    files_skipped += 1
                    continue
                
                # Get relative path for display
                relative_path = file_path.relative_to(root_path)
                
                try:
                    # Read file content
                    with open(file_path, 'r', encoding='utf-8') as in_f:
                        content = in_f.read()
                    
                    # Write to output file
                    out_f.write("\n" + "=" * 80 + "\n")
                    out_f.write(f"FILE: {relative_path}\n")
                    out_f.write("=" * 80 + "\n\n")
                    out_f.write(content)
                    out_f.write("\n\n")
                    
                    files_processed += 1
                    print(f"✓ Processed: {relative_path}")
                    
                except Exception as e:
                    print(f"✗ Error processing {relative_path}: {e}")
                    files_skipped += 1
    
    print("-" * 80)
    print(f"\nSummary:")
    print(f"  Files processed: {files_processed}")
    print(f"  Files skipped: {files_skipped}")
    print(f"  Output written to: {output_file}")

def main():
    """Main entry point."""
    # Default values
    root_dir = "."
    output_file = "concatenated_output.txt"
    
    # Parse command line arguments
    if len(sys.argv) > 1:
        root_dir = sys.argv[1]
    
    if len(sys.argv) > 2:
        output_file = sys.argv[2]
    
    # Show usage if help is requested
    if len(sys.argv) > 1 and sys.argv[1] in {'-h', '--help', 'help'}:
        print("Usage: python extract_files.py [root_directory] [output_file]")
        print("\nArguments:")
        print("  root_directory  - Root directory of Docusaurus project (default: current directory)")
        print("  output_file     - Output file path (default: concatenated_output.txt)")
        print("\nExample:")
        print("  python extract_files.py ./my-docusaurus-site output.txt")
        sys.exit(0)
    
    # Run extraction
    extract_files(root_dir, output_file)

if __name__ == "__main__":
    main()