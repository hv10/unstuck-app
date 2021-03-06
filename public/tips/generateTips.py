from pathlib import Path
import json

def main():
    public = Path(__file__).resolve().parent.parent
    content =  {}
    for tip in Path(__file__).parent.glob("**/*.md"):
        if content.get(tip.parent.name) is None:
            content[tip.parent.name] = {}
        content[tip.parent.name][tip.stem] = {
            "path": str(tip.resolve().relative_to(public))
        }
    with open(Path(__file__).parent.parent.parent / "src" / "constants" / "tipsCollection.json", mode="w+") as f:
        f.write(json.dumps(content))


if __name__=="__main__":
    main()