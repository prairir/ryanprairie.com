---
title: "Pointer syntax is backwards"
date: "2022/04/15 22:11:36"
draft: false
TocOpen: true
---

<!--TODO: fix date stuff-->
<!--TODO: fix code blocks to be default open-->

I think pointer syntax is backwards. Let me walk you through my logic and why I think that.

{{< notice note >}}
If you already know what pointers are,
skip to {{< noticea href="#the-backwards-part" >}} the backwards part {{< /noticea >}}
{{< /notice >}}

## What are pointers?

To answer that question, we first need to understand what memory is to programs.

Programs view memory as one big array (oversimplification). Just like using an array, indexing is important.
The way to index memory is through a pointer.

A pointer points into memory like an index points into an array.

This is so important, I am going to repeat it.
**A pointer points into memory like an index points into an array.**

**WIP**

Memory is basically(oversimplification) a big array and so pointers **point** to a location in memory. Pointers act as an index for the memory array.
You can also store a pointer in memory. You could get a pointer to the pointer that youre storing in memory. That is called a double pointer.

You can reference values with `&`, which gives you a pointer to that value. You can dereference a value with `*`, which gives you the value the pointer is pointing to.

I think that is backwards.

## The backwards part

To really

When you create a pointer variable, you do

```C
int* value;
```

That `*` means reference a value.
So the whole thing means there is a variable called `value` that references an int.

So following that logic, when you want to reference `value`, you would use `*value` right?
**NO**!!
You need to use `&value` to get a reference.
I think that is wrong

It should be `*value` to get a reference and `&value` to dereference.
